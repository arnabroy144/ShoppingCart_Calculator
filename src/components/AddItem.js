import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  state = {};
  render() {
    return (
      <form className="row" onSubmit={(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.productName, Number(this.state.productPrice));
      }}>
        <div className="form-group col-6">
          <label htmlFor="inputName">Product Name</label>
          <input
            name="productName"
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            placeholder="Enter Product Name"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
          <small id="name" className="form-text text-muted"></small>
        </div>
        <div className="form-group col-6 mb-3">
          <label htmlFor="inputPrice">Price</label>
          <input
            name="productPrice"
            type="number"
            className="form-control"
            id="price"
            placeholder="ie: xxxx"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
       
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
        <hr className="my-5" />
      </form>
    );
  }
}

export default AddItem;
