import {Component} from '../core/component'

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)

    this.tabs = []
  }

  init() {
    this.$el.addEventListener('click', handleTabClick.bind(this))
  }

  registerTabs(tabs) {
    this.tabs = tabs
  }
}

function handleTabClick(e) {
  e.preventDefault()
  if(e.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab'), el => el.classList.remove('active'));
    e.target.classList.add('active')

    const activeTab = this.tabs.find(tab => tab.name === e.target.dataset.name)
    this.tabs.forEach(tab => tab.component.hide())
    activeTab.component.show()
  }
}
