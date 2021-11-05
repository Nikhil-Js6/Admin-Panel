import './product.scss';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

function Product() {
    return (
        <div className='product'>
            <div className='productWrapper'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <div className='productTop'>
                <div className='productLeft'>
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className='productRight'>
                    <div className='productInfoTop'>
                        <span className='productName'>Apple</span>
                        <img className='productImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqdZ1omo50lwLgG6rprl979jWlnCfoGoeGb1-NsCdn_2pi07E&s" alt=""/>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfo'>
                            <span className='infoKey'>id:</span>
                            <span className='infoValue'>123</span>
                        </div>
                        <div className='productInfo'>  
                            <span className='infoKey'>Sales:</span>
                            <span className='infoValue'>5100</span>
                        </div>   
                        <div className='productInfo'>
                            <span className='infoKey'>Active:</span>
                            <span className='infoValue'>yes</span>
                        </div>   
                        <div className='productInfo'>
                            <span className='infoKey'>In Stock:</span>
                            <span className='infoValue'>No</span>
                        </div> 
                    </div>                       
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple iPhone'/>
                        <label>Stock</label>
                            <select name="stock" id="stock">
                                <option value="yes">In Stock</option>
                                <option value="no">Not in Stock</option>
                            </select>
                        <label>Active</label>
                        <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img className='uploadImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqdZ1omo50lwLgG6rprl979jWlnCfoGoeGb1-NsCdn_2pi07E&s"/>
                            <label for="file">
                                <Publish style={{cursor: 'pointer', abbr:"Upload new photo"}}/>
                            </label>
                            <input type="file" id="file" style={{display: 'none'}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product;
