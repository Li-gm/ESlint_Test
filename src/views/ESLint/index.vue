<!-- eslint-disable -->
<template>
  <Row>
    <div>
      <div style="text-align: center;font-size: 19px">
        <h1>Eslint</h1>
        <p></p>
      </div>
    </div>
    <Col style="margin-left: 100px;margin-top: 20px;margin-right: 50px">
      <Table
        :data="dataList"
        border
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        style="width: 100%;">
        <TableColumn type="expand">
          <template slot-scope="props">
            <Table
              v-if="props.row.level1.length"
              :data="props.row.level1"
              border
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
              style="width: 100%;">
              <TableColumn type="expand">
                <template slot-scope="props">
                  <Table
                    v-if="props.row.level1.length"
                    :data="props.row.level1"
                    border
                    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    style="width: 100%;">
                    <TableColumn type="expand">
                      <template slot-scope="props">

                      </template>
                    </TableColumn>
                    <TableColumn
                      v-for="(header,idx) in tableHeader"
                      :key="idx"
                      :prop="header._id"
                      :label="header.name"
                    >
                    </TableColumn>
                  </Table>
                </template>
              </TableColumn>
              <TableColumn
                v-for="(header,idx) in tableHeader"
                :key="idx"
                :prop="header._id"
                :label="header.name"
              >
              </TableColumn>
            </Table>
          </template>
        </TableColumn>
        <TableColumn
          v-for="(header,idx) in tableHeader"
          :key="idx"
          :prop="header._id"
          :label="header.name"
        >
        </TableColumn>
      </Table>
    </Col>
  </Row>
</template>
<script>
import {Pagination, Table, TableColumn, Tooltip} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

var _ = require('lodash');
export default {
  name: 'index',
  components: {Pagination, Table, TableColumn, Tooltip},
  data () {
    return {
      travels: [
        {
          name: '',
          address: '',
          startDate: '',
          nem: ''
        }
      ],
      dataList: [
        {
          'row_0': '房山饲养室',
          '种类': '五猴',
          'value_1': 7,
          level1: [
            {
              'row_0': 'A',
              '种类': '五猴',
              'value_1': 4,
              level1: [
                {
                  'row_0': 'a',
                  '种类': '五猴',
                  'value_1': 1
                },
                {
                  'row_0': 'b',
                  '种类': '五猴',
                  'value_1': 2
                },
                {
                  'row_0': 'c',
                  '种类': '五猴',
                  'value_1': 1
                }
              ]
            },
            {
              'row_0': 'B',
              '种类': '五猴',
              'value_1': 3,
              level1: [
                {
                  'row_0': 'a',
                  '种类': '五猴',
                  'value_1': 2
                },
                {
                  'row_0': 'b',
                  '种类': '五猴',
                  'value_1': 1
                }
              ]
            }
          ]
        }
      ],
      allData: [
        {
          'row_0': '房山饲养室-A-a',
          '种类': '四猴',
          'value_1': 1
        },
        {
          'row_0': '房山饲养室-A-b',
          '种类': '四猴',
          'value_1': 2
        },
        {
          'row_0': '房山饲养室-A-c',
          '种类': '四猴',
          'value_1': 1
        },
        {
          'row_0': '房山饲养室-B-a',
          '种类': '四猴',
          'value_1': 2
        },
        {
          'row_0': '房山饲养室-B-b',
          '种类': '四猴',
          'value_1': 1
        },
        {
          'row_0': '昌平饲养室-A-a',
          '种类': '四猴',
          'value_1': 2
        },
        {
          'row_0': '昌平饲养室-A-b',
          '种类': '四猴',
          'value_1': 2
        },
        {
          'row_0': '昌平饲养室-B-b',
          '种类': '四猴',
          'value_1': 2
        },
        {
          'row_0': '朝阳饲养室-A',
          '种类': '朝阳猴',
          'value_1': 2
        },
        {
          'row_0': '朝阳饲养室-A',
          '种类': '朝阳猴',
          'value_1': 1
        },
        {
          'row_0': '朝阳饲养室-B',
          '种类': '朝阳猴',
          'value_1': 1
        }
      ],
      tableHeader: [
        {
          _id: 'row_0',
          name: '饲养室'
        },
        {
          _id: '种类',
          name: '种类'
        },
        {
          _id: 'value_1',
          name: '和'
        }
      ]
    }
  },
  mounted () {
    this.initData();
  },
  methods: {
    initData () {
      let arrTree = [];// 将row_0的数据按照-拆分
      let allDataInfo = _.cloneDeep(this.allData);
      for (let i = 0; i < allDataInfo.length; i++) {
        let row0 = allDataInfo[i].row_0;
        let row0List = row0.split('-');
        for (let n = 0; n < row0List.length; n++) {
          if (!n) {
            let info = _.cloneDeep(allDataInfo[i]);
            arrTree.push(info);
            arrTree[i].row_0 = row0List[n];
            arrTree[i].level1 = [];
          } else if (n === 1) {
            let info = _.cloneDeep(allDataInfo[i]);
            arrTree[i].level1.push(info);
            arrTree[i].level1[0].row_0 = row0List[n];
            arrTree[i].level1[0].level1 = [];
          } else if (n === 2) {
            let info = _.cloneDeep(allDataInfo[i]);
            arrTree[i].level1[0].level1.push(info);
            arrTree[i].level1[0].level1[0].row_0 = row0List[n];
            arrTree[i].level1[0].level1[0].level1 = [];
          }
        }
      }
      this.listDataSearch(arrTree);
    },
    listDataSearch (arrTree) {
      let listData = this.returnDataSearch(arrTree);
      for (let i = 0; i < listData.length; i++) {
        if (listData[i].level1.length > 1) {
          let returnData = this.returnDataSearch(listData[i].level1);
          listData[i].level1 = returnData;
        }
      }
      // console.log('listData', listData);
      this.dataList = listData;
    },
    returnDataSearch (arrTree) {
      let tempObj = {};
      let listData = [];
      for (let i = 0; i < arrTree.length; i++) {
        if (arrTree[i].row_0 in tempObj) {
          if (arrTree[i].level1.length) {
            let info = _.cloneDeep(arrTree[i].level1[0]);
            tempObj[arrTree[i].row_0].level1.push(info);
          }
          for (let item in tempObj[arrTree[i].row_0]) {
            // 是数字类型
            if (!isNaN(tempObj[arrTree[i].row_0][item])) {
              tempObj[arrTree[i].row_0][item] = Number(tempObj[arrTree[i].row_0][item]) + Number(arrTree[i][item]);
            }
          }
        } else {
          let info = _.cloneDeep(arrTree[i]);
          tempObj[arrTree[i].row_0] = info;
        }
      }
      for (let key in tempObj) {
        listData.push(tempObj[key])
      }
      return listData;
    }
  }
}
</script>
<style scoped>
</style>
