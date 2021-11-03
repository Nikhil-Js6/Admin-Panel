import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userData } from '../../dummyData';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './home.scss';
 
function home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} grid dataKey="Active User" title="User Analytics"/>
            <div className='widgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default home;
