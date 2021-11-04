import React from './widgetLg.scss';

function WidgetLg() {

    const Button = ({ type }) => {
        return (
            <button className={"WidLgButton " + type}>{type}</button>
        )
    }

    return (
        <div className='widgetLg'>
            <h3 className='WidLgTitle'>Latest Transactions</h3>
            <table className='WidLgTable'>
                <tr className='WidLgTr'>
                    <th className='WidLgTh'>Customer</th>
                    <th className='WidLgTh'>Date</th>
                    <th className='WidLgTh'>Amount</th>
                    <th className='WidLgTh'>Status</th>
                </tr>
                <tr className='WidLgTr'>
                    <td className='WidLgUser'>
                        <img className='WidLgUserImg' src="https://i.ytimg.com/vi/feCyUYEYEYs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC3A29m_UYa-bUiiPfp025JEY7QCg" alt=""/>
                        <span className='WidLgName'>User</span>
                    </td>
                    <td className='WidLgDate'>4 Mar 2021</td>
                    <td className='WidLgAmount'>$250</td>
                    <td className='WidLgStatus'>
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className='WidLgTr'>
                    <td className='WidLgUser'>
                        <img className='WidLgUserImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79As3muBt4pjdMAqWMN9CWPlXe-LP8tm_Aw&usqp=CAU" alt=""/>
                        <span className='WidLgName'>Client</span>
                    </td>
                    <td className='WidLgDate'>22 Jun 2021</td>
                    <td className='WidLgAmount'>$10,000</td>
                    <td className='WidLgStatus'>
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className='WidLgTr'>
                    <td className='WidLgUser'>
                        <img className='WidLgUserImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdILpV7lbw_Ad-bDYCvhz6sGfFsO__AcJzfIaX8RcJhmz0dYe2i7rWvzgkizXPcGsuLmo&usqp=CAU" alt=""/>
                        <span className='WidLgName'>System Test</span>
                    </td>
                    <td className='WidLgDate'>21 Nov 2021</td>
                    <td className='WidLgAmount'>$25,000</td>
                    <td className='WidLgStatus'>
                        <Button type="Pending"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
