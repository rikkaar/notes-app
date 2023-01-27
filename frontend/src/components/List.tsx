import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    if (props.items.length === 0){
        return (
            <div className={"notes-not-found"}>
                <h2>Oops, you haven't added any notes</h2>
            </div>
        )
    }
    else return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}