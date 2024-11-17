import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const lableFormatter = (name,amount) => {
    return `${name}`;
};

const renderLegendText = (value, entry) => {
  const { payload } = entry;
  return `${payload.name}: ₹${payload.value}`;
};

export default function Chart() {
  const [gullaks, setGullaks] = useState([
    { name: 'Gullak 1', amount: 100, max: 100 },
    { name: 'Gullak 2', amount: 100, max: 100 },
    { name: 'Gullak 3', amount: 100, max: 100 },
    { name: 'Gullak 4', amount: 100, max: 100 },
    { name: 'Gullak 5', amount: 100, max: 100 },
    { name: 'Gullak 6', amount: 100, max: 100 }
    ]);
  const [newGullakName, setNewGullakName] = useState('');
  const [newGullakAmount, setNewGullakAmount] = useState(0);
  const [newGullakMax, setNewGullakMax] = useState(100);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

  const addGullak = () => {
    setGullaks([...gullaks, { name: newGullakName, amount: newGullakAmount, max: newGullakMax }]);
    setNewGullakName('');
    setNewGullakAmount(0);
    setNewGullakMax(100);
  };

  const removeGullak = (index) => {
    setGullaks(gullaks.filter((_, i) => i !== index));
  };

  const totalSaved = gullaks.reduce((sum, gullak) => sum + gullak.amount, 0);
  const totalMax = gullaks.reduce((sum, gullak) => sum + gullak.max, 0);
  const remainingAmount = totalMax - totalSaved;

  const pieData = [
    ...gullaks.map(gullak => ({ name:gullak.name , value: gullak.amount }))
  ];

  useEffect(() => {
    console.log('Pie Data:', pieData);
    console.log('Gullaks:', gullaks);
  }, [pieData,gullaks]);

  return (
    <div className='h-full w-full flex items-center justify-center'>
      {/* <Typography variant="h4" gutterBottom>
        Gullak Manager
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Gullak Name"
          value={newGullakName}
          onChange={(e) => setNewGullakName(e.target.value)}
        />
        <TextField
          label="Amount Saved"
          type="number"
          value={newGullakAmount}
          onChange={(e) => setNewGullakAmount(Number(e.target.value))}
        />
        <TextField
          label="Max Amount"
          type="number"
          value={newGullakMax}
          onChange={(e) => setNewGullakMax(Number(e.target.value))}
        />
        <Button variant="contained" onClick={addGullak}>
          Add Gullak
        </Button>
      </Box> */}
      {/* <Typography variant="h4" gutterBottom>
        Gullak Manager
      </Typography> */}
      <Box sx={{ width: '100%', height: '100%', paddingLeft: '140px', paddingRight: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <PieChart width={750} height={230}>
          <Pie
            data={pieData}
            cx={375}
            cy={115}
            label={({ name, value }) => lableFormatter(name,value)}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            innerRadius={0}
            className="focus:outline-none"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {/* <Tooltip/> */}
          <Legend 
            layout="vertical"
            align='left'
            verticalAlign='middle'
            formatter={renderLegendText} wrapperStyle={{ fontSize: '20px' }}
          />
        </PieChart>
      </Box>
      {/* <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="Skip Animation"
        labelPlacement="end"
      /> */}
    </div>
  );
}