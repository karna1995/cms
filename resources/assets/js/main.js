let Vue = require('vue')
let VueResource = require('vue-resource')

import LoginComponent from './components/Login.vue'
import CampaignComponent from './components/Campaign.vue'
import SidebarComponent from './components/Sidebar.vue'

import EditRebuttalComponent from './components/rebuttal/Edit.vue'
import EditPromoComponent from './components/Promo/Edit.vue'
import EditTermsComponent from './components/Terms/Edit.vue'
import EditSectionComponent from './components/Section/Edit.vue'
import EditFeatureComponent from './components/Feature/Edit.vue'

import CreateRebuttalComponent from './components/rebuttal/Create.vue'
import CreateCampaignComponent from './components/Campaign/Create.vue'
import CreatePromoComponent from './components/Promo/Create.vue'
import CreateSectionComponent from './components/Section/Create.vue'
import CreateTermsComponent from './components/Terms/Create.vue'
import CreateUsersComponent from './components/Auth/Create.vue'
import CreateFeatureComponent from './components/Feature/Create.vue'

Vue.use(VueResource)

Vue.http.options.root = 'http://cms.dev/'
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf_token').getAttribute('content')

export default Vue

new Vue({
    el: 'body',

    components: {
        LoginComponent,
        CampaignComponent,
        SidebarComponent,

        EditRebuttalComponent,
        EditPromoComponent,
        EditTermsComponent,
        EditSectionComponent,
        EditFeatureComponent,
        
        CreateCampaignComponent,
        CreateRebuttalComponent,
        CreatePromoComponent,
        CreateSectionComponent,
        CreateTermsComponent,
        CreateUsersComponent,
        CreateFeatureComponent
    }
})

const sortable = require('sortablejs')
const element = document.querySelector('.draggable')

if (element != null) {
    sortable.create(element, {
        aggregate: 'tr'
    })
}
