import {Component} from '../core/component'

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    this.$el.addEventListener('click', handleTabClick.bind(this))
  }
}

function handleTabClick(e) {
  e.preventDefault()
  if(e.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab'), el => el.classList.remove('active'));
    e.target.classList.add('active')
  }
}
