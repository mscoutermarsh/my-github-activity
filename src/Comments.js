import React, { Component } from 'react';
import Truncate from 'react-truncate-html';

class Comments extends Component {
  render(props) {
    const listItems = this.props.comments.map((comment) =>
      <li>
        <strong>{comment.issue.repository.nameWithOwner}</strong> | {comment.issue.title} | 
        <Truncate lines={2} dangerouslySetInnerHTML={{__html: comment.bodyText}} />
      </li>
    );

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default Comments;
