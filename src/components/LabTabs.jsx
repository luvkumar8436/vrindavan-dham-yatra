import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'; 
import Box from '@mui/material/Box';
import ItenaryDetails from './ItenaryDetails';
import "./LabTabs.css"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="box" sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant='scrollable' visibleScrollbar={true} textColor='inherit' value={value} onChange={handleChange} aria-label="basic tabs example">
            {
                Object.keys(data).map((label , i) => 
                  <Tab wrapped={true}  label={label} {...a11yProps(i)} />
                )
            }
        </Tabs>
      </Box>
      {
          Object.keys(data).map((label , i) => 
              <CustomTabPanel className='tab' value={value} index={i}>
                <ItenaryDetails  data={data[label]}/>
              </CustomTabPanel>
          )


        // data.map((itenary ) =>  
        //   (
        //   <CustomTabPanel className='tab' value={value} index={0}>
        //       <ItenaryDetails  data={data}/>
        //   </CustomTabPanel>
        //   )
        // )
      }
    </Box>
  );
}
