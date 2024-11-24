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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="box" sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant='scrollable' visibleScrollbar={true} textColor='inherit' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab wrapped={true}  label="Item One" {...a11yProps(0)} />
          <Tab wrapped={true} label="Item Two" {...a11yProps(1)} />
          <Tab wrapped={true} label="Item Three" {...a11yProps(2)} />
          <Tab wrapped={true} label="Item Zero" {...a11yProps(3)} />
          <Tab wrapped={true} label="Item FOur" {...a11yProps(4)} />
          <Tab wrapped={true} label="Item Five" {...a11yProps(5)} />
          <Tab wrapped={true} label="Item Six" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel className='tab' value={value} index={0}>
      In Mathura, Radha Kund is close to Govardhan Hill. The Lord Krishna and Radha Devotees regard the two holy water tanks, Radha Kund and Shyam Kund, located next to each other as the most sacred locations. These kinds of water are regarded as sacred, pure, and having healing abilities. This location has historical significance since it symbolises the pure love of Lord Krishna and Radha, his soul mate. Legend has it that Lord Krishna killed the demon bull here. Soon after, Radha gave Lord Krishna the advice to wash his sins away by bathing in a number of holy rivers. Krishna, on the other hand, chuckled at the thought of Radha and stamped his foot. It is said that the location where he injured his foot came from a Kund, or pond. It is said that devotees who have this belief and wish to experience the same level of passionate love that Radha and Lord Krishna did for one another might take a bath in the Radha and Krishna Kund. Radha Damodar Temple, Krishna Janmabhoomi Temple, and Dwarkadhish Temple are more nearby attractions.

      </CustomTabPanel>
      <CustomTabPanel className='tab' value={value} index={1}>
        <ItenaryDetails />
      </CustomTabPanel> 
      <CustomTabPanel className='tab' value={value} index={2}>
      <ItenaryDetails />
      </CustomTabPanel>
    </Box>
  );
}
