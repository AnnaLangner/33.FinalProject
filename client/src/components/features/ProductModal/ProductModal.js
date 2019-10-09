import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import SingleProduct from "../SingleProduct/SingleProductContainer";

class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color={'secondary'} onClick={this.toggle}>More about</Button>
                <Modal>
                    <ModalBody>
                        <SingleProduct />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Add to cart</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ProductModal;