import React, { Component } from 'react'
import { connect } from 'react-redux';

class AdminOrder extends Component {
    render() {
        if (this.props.orders.length > 0) {
            return (
                <div>
                    {this.props.orders.map(orderee => {
                        const IDs = orderee.productID.toString()
                        return (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Orderee's ID</th>
                                        <th scope="col">Orderee's name</th>
                                        <th scope="col">Orderee's address</th>
                                        <th scope="col">Ordered product IDs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-active">
                                        <td>{orderee.orderID}</td>
                                        <td>{orderee.name}</td>
                                        <td>{orderee.address}</td>
                                        <td>{IDs}</td>
                                    </tr>
                                </tbody>
                            </table>

                        )
                    })}
                </div>
            )
        } else {
            return (
                <p>No new order</p>
            )
        }
    }
}

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(AdminOrder)