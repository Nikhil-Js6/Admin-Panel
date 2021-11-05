import './chart.scss';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Legend } from 'recharts/lib/component/Legend';

function Chart({ title, data, dataKey, grid }) {

    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect ={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#0ff" />
                        <Line type="monotone" dataKey={dataKey} stroke="#0ff"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#464646" strokeDasharray="3 3"/>}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;
