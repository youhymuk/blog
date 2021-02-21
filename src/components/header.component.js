import {Component} from '../core/component'

export class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if(localStorage.getItem('isVisited')) {
      this.hide()
    }
    const btn = this.$el.querySelector('.js-get-started')
    btn.addEventListener('click', handleStartButtonClick.bind(this))
  }
}

function handleStartButtonClick () {
  localStorage.setItem('isVisited', JSON.stringify(true));
  this.hide()
}
