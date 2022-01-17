import React from "react";

const TodoList = ()=>(
    <div className="list-group">
        <a href='/#' className="list-group-item list-group-item-action ">
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
        </a>
        <a href='/#' className="list-group-item list-group-item-action">
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
        </a>
        <a href="/#" className="list-group-item list-group-item-action">
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
        </a>
    </div>
);

export default TodoList;