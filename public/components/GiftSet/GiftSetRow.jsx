import React from 'react';
import moment from 'moment';
import { Button, Glyphicon } from 'react-bootstrap';

class GiftSetRow extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onMarkAsPaid = this.onMarkAsPaid.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.giftSet);
    }

    onMarkAsPaid() {
        this.props.onMarkAsPaid(this.props.giftSet);
    }

    render() {
        const createdAt = moment(this.props.giftSet.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        console.log(this.props.giftSet);

        return (
            <tr>
                <th>{this.props.giftSet.giver.forename} {this.props.giftSet.giver.surname}</th>
                <th>{this.props.giftSet.giver.email}</th>
                <th>{this.props.giftSet.giver.phoneNumber}</th>
                <th>{this.props.giftSet.total}</th>
                <th>{createdAtFormatted}</th>
                <th>{this.props.giftSet.paid ? 'Yes' : 'No'}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="success"
                        onClick={this.onMarkAsPaid}
                        disabled={this.props.giftSet.paid}
                    >
                        <Glyphicon glyph="gbp" />
                    </Button>

                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onDelete}
                        disabled={this.props.giftSet.paid}
                    >
                        <Glyphicon glyph="trash" />
                    </Button>
                </th>
            </tr>
        );
    }
}

GiftSetRow.propTypes = {
    giftSet: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onMarkAsPaid: React.PropTypes.func.isRequired,
};

GiftSetRow.defaultProps = {
    giftSet: {},
};

export default GiftSetRow;
