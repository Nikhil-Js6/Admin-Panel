import './newProduct.scss';

function NewProduct() {
    return (
        <div className='newProduct'>
            <h1 className='newProductTitle'>New Product</h1>
            <form className='newProductForm'>
                <div className='newProductItem'>
                    <label>Name</label>
                    <input type="text" placeholder='Product'/>
                </div>
                <div className='newProductItem'>
                    <label>Stock</label>
                    <input type="text" placeholder='100'/>
                </div>
                <div className='newProductItem'>
                    <label>Active</label>
                    <select className='newProductActive' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='newProductUpload'>
                    <label for="file">Image</label>
                    <input type="file" id="file"/>
                </div>
                <button className='newProductButton'>Create</button>
            </form>
        </div>
    )
}

export default NewProduct;
