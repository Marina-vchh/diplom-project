import React from 'react';
import "./loading.css"

const isEmpty = (prop: any) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
);

interface WithLoadingProps {
    data: IResult[];
}

interface IResult {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const LoadingHOC = (loadingProp: string) => <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
            return isEmpty(this?.props?.[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props as P} />;
        };
    };
    return WithLoading;
};


export default LoadingHOC;
