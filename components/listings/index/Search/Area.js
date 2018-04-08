import {Component} from 'react'
import Select from 'react-select'
import numeral from 'numeral'

import {minAreaOptions, maxAreaOptions} from 'constants/listing-filter-options'

export default class AreaFilter extends Component {
  onChange = (prop) => (val) => {
    const {value: {min, max}, onChange} = this.props
    onChange({min, max, [prop]: val ? val.value : undefined})
  }

  onChangeMin = this.onChange('min')

  onChangeMax = this.onChange('max')

  get active() {
    const {value: {min, max}, visible} = this.props
    return min || max || visible
  }

  get buttonText() {
    const {min, max} = this.props.value
    const abbreviatedMin = numeral(min).format('0a')
    const abbreviatedMax = numeral(max).format('0a')

    let suffix

    if (min && max) {
      suffix = abbreviatedMin + '-' + abbreviatedMax + 'm²'
    } else if (min) {
      suffix = abbreviatedMin + 'm²+'
    } else if (max) {
      suffix = '0-' + abbreviatedMax + 'm²'
    }

    if (suffix) {
      return suffix
    } else {
      return 'Área'
    }
  }

  render() {
    const {value, visible, onToggle, onClose} = this.props

    return (
      <div className="filter-param-container">
        <button className={this.active ? 'active' : ''} onClick={onToggle}>
          {this.buttonText}
        </button>

        {visible && (
          <div className="option-container">
            <span className="mobile-param-title">Área</span>
            <div>
              <Select
                arrowRenderer={null}
                style={{width: 100}}
                placeholder="m²"
                value={value.min}
                onChange={this.onChangeMin}
                options={minAreaOptions}
                searchable={false}
              />

              <label>até</label>

              <Select
                arrowRenderer={null}
                style={{width: 100}}
                placeholder="m²"
                value={value.max}
                onChange={this.onChangeMax}
                options={maxAreaOptions}
                searchable={false}
              />
            </div>
            <span className="close-filter-param" onClick={onClose}>
              Aplicar
            </span>
          </div>
        )}
      </div>
    )
  }
}
