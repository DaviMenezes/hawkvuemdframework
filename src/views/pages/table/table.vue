<template>
  <div style="top: 50px; position: relative;">
    <h1>Table</h1>

    <prism language="javascript" :code="tbdata"></prism>

    <pre v-highlightjs="tbColumns">
      <code class="javacript">
      </code>
    </pre>

    <h1>Table Sample</h1>
    <div class="col-6" style="height: 450px;">
      <h-table
        title="Users"
        :columns="tableColumns"
        :rows="tableDatabase"
        lineheight="40px"
        @addRows="addRows"
        @editRow="editRow"
        @deleteRows="deleteRows"
      >
      </h-table>
    </div>

    <prism language="html" :code="table"></prism>

    <h1>Table Selectable with custom columns</h1>
    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> Just add <b>selectable</b> to tag table
    </div>
    <div class="col-6 h-pt-md" style="height: 450px;">
      <h-table
        selectable
        title="Users"
        :columns="tableColumns2"
        :rows="tableDatabase"
        lineheight="40px"
        @addRows="addRows"
        @editRow="editRow"
        @deleteRows="deleteRows"
      >
        <template slot="number" slot-scope="row">
          {{row.rowData.number}}
        </template>
        <template slot="avatar" slot-scope="row">
          <img :src="row.rowData.avatar" style="width:40px; height:40px;">
        </template>
        <template slot="actions" slot-scope="row">
          <h-fa-icon icon="fas fa-edit" @click="editRow(row)"/>
          <h-fa-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
        </template>
      </h-table>
    </div>

    <prism language="html" :code="table2"></prism>

    <h2 class="text-primary"> Table Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>title</div>
        <div>columns</div>
        <div>rows</div>
        <div>lineheight</div>
        <div>selectable</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>Array</div>
        <div>Array</div>
        <div>String</div>
        <div>Booelan</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the table title</div>
        <div>Array of object for each column data</div>
        <div>Array of object with table rows data</div>
        <div>Sets the line for each table row. Ex: lineheight="40px"</div>
        <div>Add checkbox to each row</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@addRows(value)</div>
        <div>@editRow(value)</div>
        <div>@deleteRows(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when user clicks on plus icon in table header. The selected rows is sent.</div>
        <div>Triggered when user clicks on edit icon in table header. The selected row is sent.</div>
        <div>Triggered when user clicks on trash icon in table header. The selected rows is sent.</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tableColumns: [
        {
          name: 'number',
          alignment: 'flex-justify-end',
          type: 'number',
          sortable: true
        },
        {
          name: 'country',
          alignment: 'flex-justify-center'
        },
        {
          name: 'city',
          sortable: true
        }
      ],
      tableColumns2: [
        {
          name: 'number',
          alignment: 'flex-justify-end'
        },
        {
          name: 'avatar',
          alignment: 'flex-justify-center'
        },
        {
          name: 'country',
          alignment: 'flex-justify-center'
        },
        {
          name: 'city'
        },
        {
          name: 'actions',
          alignment: 'flex-justify-center'
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles' },
        { number: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Seatle' },
        { number: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Philadelphia' },
        { number: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Diego' }
      ],
      tbdata: `
tableData: [
  { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver' },
  { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York' },
  { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas' },
  { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington' },
  { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio' },
  { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago' },
  { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles' },
  { number: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Seatle' },
  { number: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Philadelphia' },
  { number: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Diego' }
]      
      `,
      tbColumns: `
tableColumns: [
  {
    name: 'number',
    alignment: 'flex-justify-end'
  },
  {
    name: 'country',
    alignment: 'flex-justify-center'
  },
  {
    name: 'city'
  }
],
tableColumns2: [
  {
    name: 'number',
    alignment: 'flex-justify-end'
  },
  {
    name: 'avatar',
    alignment: 'flex-justify-center'
  },
  {
    name: 'country',
    alignment: 'flex-justify-center'
  },
  {
    name: 'city'
  },
  {
    name: 'actions'
  }
]
      `,
      table: `
<div class="col-6" style="height: 450px;">
  <h-table      
    title="Users"
    :columns="tableColumns"
    :rows="tableData"
    lineheight="40px"
  >
  </h-table>
</div>      
      `,
      table2: `
<div class="col-6 h-pt-md" style="height: 450px;">
  <h-table
    selectable
    title="Users"
    :columns="tableColumns2"
    :rows="tableDatabase"
    lineheight="40px"
    @addRows="addRows"
    @editRow="editRow"
    @deleteRows="deleteRows"
  >
    <template slot="number" slot-scope="row">
      {{row.rowData.number}}
    </template>
    <template slot="avatar" slot-scope="row">
      <img :src="row.rowData.avatar" style="width:40px; height:40px;">
    </template>
    <template slot="actions" slot-scope="row">
      <h-fa-icon icon="fas fa-edit" @click="editRow(row)"/>
      <h-fa-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
    </template>
  </h-table>
</div>

methods: {
  addTableRows () {
    this.tableDatabase = []
    for (let index = 0; index < this.dataBase.length; index++) {
      this.tableDatabase.push({
        number: this.dataBase[index].number,
        avatar: this.dataBase[index].avatar,
        country: this.dataBase[index].country,
        city: this.dataBase[index].city
      })
    }
  },
  addRows (rows) {
    console.log('addRows: ' + JSON.stringify(rows))
  },
  editRow (row) {
    console.log('editRow: ' + JSON.stringify(row))
  },
  deleteRows (rows) {
    console.log('deleteRows: ' + JSON.stringify(rows))
  }
}
      `
    }
  },
  created () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableDatabase = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableDatabase.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    },
    addRows (rows) {
      console.log('addRows: ' + JSON.stringify(rows))
    },
    editRow (row) {
      console.log('editRow: ' + JSON.stringify(row))
    },
    deleteRows (rows) {
      console.log('deleteRows: ' + JSON.stringify(rows))
    }
  }
}
</script>