import React from 'react';
import { TableapiServiceConsumer } from '../tableapi-service-context';

const withTableapiService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <TableapiServiceConsumer>
            {
                (TableapiService) => {
                    const serviceProps = mapMethodsToProps(TableapiService);
                    return (
                        <Wrapped {...props} {...serviceProps} />
                    );
                }
            }
            </TableapiServiceConsumer>
        );
    }
};

export default withTableapiService;
