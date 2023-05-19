import { Table, Toggle, TagPicker } from 'rsuite';
import React from 'react';
const { Column, HeaderCell, Cell } = Table;
const data = [{
  id:1,
  firstName: "Arnab",
  lastName: "chatterjee",
  gender:"male",
  city: "burdwan"
}]

const CompactCell = props => <Cell {...props} style={{ padding: 4 }} />;
const CompactHeaderCell = props => <HeaderCell {...props} style={{ padding: 4 }} />;

const defaultColumns = [
  {
    key: 'id',
    label: 'Id',
    fixed: true,
    width: 70,
  },
  {
    key: 'firstName',
    label: 'First Name',
    fixed: true,
    width: 150,
    resizable:true,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    width: 300,
    resizable:true,
  },

  {
    key: 'gender',
    label: 'Gender',
    width:100,

  },
  {
    key: 'city',
    label: 'City',
    flexGrow: 1,
  }
];

const RTable = ({heading}) => {
  const [loading, setLoading] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const [bordered, setBordered] = React.useState(true);
  const [noData, setNoData] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);
  const [autoHeight, setAutoHeight] = React.useState(true);
  const [fillHeight, setFillHeight] = React.useState(false);
  const [hover, setHover] = React.useState(true);
  const [columnKeys, setColumnKeys] = React.useState(defaultColumns.map(column => column.key));

  const columns = defaultColumns.filter(column => columnKeys.some(key => key === column.key));
  const CustomCell = compact ? CompactCell : Cell;
  const CustomHeaderCell = compact ? CompactHeaderCell : HeaderCell;

  return (
    <div>
      <h1 className='tableHeading'>{heading}</h1>
      <div style={{ height: autoHeight ? 'auto' : 250 }}>
        <Table
          loading={loading}
          height={300}
          hover={hover}
          fillHeight={fillHeight}
          showHeader={showHeader}
          autoHeight={autoHeight}
          data={noData ? [] : data}
          bordered={bordered}
          cellBordered={bordered}
          headerHeight={compact ? 30 : 40}
          rowHeight={compact ? 30 : 46}
        >
          {columns.map(column => {
            const { key, label, ...rest } = column;
            return (
              <Column {...rest} key={key}>
                <CustomHeaderCell>{label}</CustomHeaderCell>
                <CustomCell dataKey={key} />
              </Column>
            );
          })}
          
        </Table>
      </div>
    </div>
  );
};

export default RTable;