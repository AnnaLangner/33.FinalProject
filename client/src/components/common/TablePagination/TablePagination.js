import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import loadTestData from '../../../testData'

import './TablePagination.scss'

class TablePagination extends React.Component {
    constructor() {
        super();
        this.dataSet = loadTestData;

        this.pageSize = 6;
        console.log(this.pageSize);
        Math.celi(this.dataSet.length / this.pageSize);
        this.state = {
            initialPage: 0
        };
    }

    changePage = (newPage) => {
        const { onPageChange } = this.props;

        this.setState({ presentPage: newPage });
        onPageChange(newPage);
    };

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            presentPage: index
        });
    }

    render(){
        const { presentPage } = this.state;
        const { changePage } = this;

        return (
            <div className={'pagination'}>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={presentPage <= 0}>
                        <PaginationLink onClick={e => this.handleClick(e, presentPage - 1)} previous href={'#'}/>
                    </PaginationItem>
                    {[...Array(Math.celi(this.dataSet.length / this.pageSize))].map((page, i) => (
                        <PaginationItem active={i === presentPage} key={i}>
                            <PaginationLink onClick={e => changePage(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}git 
                    <PaginationItem disabled={presentPage >= (Math.celi(this.dataSet.length / this.pageSize)) -1}>
                        <PaginationLink onClick={e => this.handleClick(e, presentPage + 1)} next href={'#'}/>
                    </PaginationItem>
                </Pagination>
                {this.dataSet
                    .slice(
                        presentPage * this.pageSize,
                        (presentPage + 1)* this.pageSize
                    )
                    .map((data, i) =>
                        <div className={'data-slice'} key={i}>
                            {data}
                        </div>)
                }
            </div>
        )
    }
}

TablePagination.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    initialPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onPreviousClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired
};

export default TablePagination;