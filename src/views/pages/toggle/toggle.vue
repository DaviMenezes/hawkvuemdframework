<template>
  <h-page-content padding>

    <div class="row">
      <div class="col">
        <div class="text-h4">Toggle</div>

        <div ref="tg-boolean"/>
        <comp-code class="h-mt-lg" title="Boolean" :code="ckboolean" :script="ckbooleanScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Do you agree terms and conditions?
            </div>
            <div class="col">
              <h-toggle v-model="termAccepted" text="I agree"/>
            </div>
            <div class="col">
              Your option is: {{ termAccepted }}
            </div>
          </div>

        </comp-code>

        <div ref="tg-readonly"/>
        <comp-code class="h-mt-lg" title="Readonly" :code="ckreadonly" :script="ckreadonlyScript"
          javascript
        >
          <div class="column">
            <div class="col">
              <h-toggle v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
              <h-toggle v-model="typeReadOnly" text="Action1" value="a1"/>
              <h-toggle v-model="typeReadOnly" text="Action2" value="a2"/>
            </div>
            <div class="col">
              Model: {{ typeReadOnly }}
            </div>
          </div>

        </comp-code>

        <comp-code class="h-mt-lg" title="Option checked" :code="ckOptChecked" :script="ckOptCheckedScript"
          javascript
        >
          <div class="column">
            <div class="col">
              <h-toggle v-model="ckChecked" text="Item checked"/>
            </div>
            <div class="col">
              Your model is {{ckChecked}}
            </div>
          </div>
        </comp-code>

        <div ref="tg-list"/>
        <comp-code class="h-mt-lg" title="List" :code="cklist" :script="cklistScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Select your favorite colors
            </div>
            <div class="col">
              <h-toggle v-model="colors" text="Red" value="Red"/>
              <h-toggle v-model="colors" text="Green" value="Green"/>
              <h-toggle v-model="colors" text="Blue" value="Blue"/>
            </div>
            <div class="col">
              Your favorites colors: {{ colors }}
            </div>
          </div>

        </comp-code>

        <div ref="tg-listnumbers"/>
        <comp-code class="h-mt-lg" title="List with numbers" :code="cklistnumbers" :script="cklistnumbersScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Select yours favorite numbers
            </div>
            <div class="col">
              <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
              <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
              <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
              <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
            </div>
            <div class="col">
              Favorite numbers {{ checkedNumbers }}
            </div>
          </div>

        </comp-code>

        <tabs-help
          class="h-mt-md"
          :properties="helpTopics.properties"
          :events="helpTopics.events"
        />

        <!-- <h2 class="text-primary"> Vue Properties</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>text</div>
            <div>value</div>
            <div>checked</div>
            <div>disabled</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>String, Number</div>
            <div>String, Number, Object</div>
            <div>Boolean</div>
            <div>Boolean</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
            <div>Sets the text of the toggle</div>
            <div>Sets the value of the toggle</div>
            <div>If true the toggle is on</div>
            <div>if true the toggle is disabled</div>
          </div>
        </div>

        <h2 class="text-primary"> Vue Events</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>@change(value)</div>
          </div>
          <div class="h-pl-md">
            <h3>Description</h3>
            <div>Triggered immediately on model change</div>
          </div>
        </div> -->
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('tg-boolean')">
              <h-list-item-content>
                <h-list-item-text title="Boolean"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-readonly')">
              <h-list-item-content>
                <h-list-item-text title="Readonly"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-list')">
              <h-list-item-content>
                <h-list-item-text title="List"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-listnumbers')">
              <h-list-item-content>
                <h-list-item-text title="Numbers"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'
import helpTopics from './help'

export default {
  data () {
    return {
      ckChecked: true,
      termAccepted: false,
      typeReadOnly: ['a2'],
      colors: [],
      checkedNames2: ['Maça', 'Uva', 'Abacaxi'],
      checkedNumbers: [1, 3],
      checked2: false,
      helpTopics: {
        properties: [],
        events: []
      },
      ckboolean: `
<div class="column">
  <div class="col">
    Do you agree terms and conditions?
  </div>
  <div class="col">
    <h-toggle v-model="termAccepted" text="I agree"/>
  </div>
  <div class="col">
    Your option is: {{ termAccepted }}
  </div>
</div>
`,
      ckbooleanScript: `
  data () {
    return {
      termAccepted: false
    }
  }
`,
      ckreadonly: `
<div class="column">
  <div class="col">
    <h-toggle v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
    <h-toggle v-model="typeReadOnly" text="Action1" value="a1"/>
    <h-toggle v-model="typeReadOnly" text="Action2" value="a2"/>
  </div>
  <div class="col">
    Model: {{ typeReadOnly }}
  </div>
</div>
`,
      ckreadonlyScript: `
export default {
  data () {
    return {
      typeReadOnly: ['a2']
    }
  }
}      
`,
      ckOptChecked: `
<div class="column">
  <div class="col">
    <h-toggle v-model="ckChecked" text="Item checked"/>
  </div>
  <div class="col">
    Your model is {{ckChecked}}
  </div>
</div>
`,
      ckOptCheckedScript: `
export default {
  data () {
    return {
      ckChecked: true
    }
  }
}
`,
      cklist: `
<div class="column">
  <div class="col">
    Select your favorite colors
  </div>
  <div class="col">
    <h-toggle v-model="colors" text="Red" value="Red"/>
    <h-toggle v-model="colors" text="Green" value="Green"/>
    <h-toggle v-model="colors" text="Blue" value="Blue"/>
  </div>
  <div class="col">
    Your favorites colors: {{ colors }}
  </div>
</div>
`,
      cklistScript: `
  data () {
    return {
      colors: []
    }
  }    
`,
      cklistnumbers: `
<div class="column">
  <div class="col">
    Select yours favorite numbers
  </div>
  <div class="col">
    <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
    <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
    <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
    <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
  </div>
  <div class="col">
    Favorite numbers {{ checkedNumbers }}
  </div>
</div>
`,
      cklistnumbersScript: `
  data () {
    return {
      checkedNumbers: [1, 3]
    }
  }      
`
    }
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    }
  }
}
</script>
