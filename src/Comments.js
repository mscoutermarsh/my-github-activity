import React, { Component } from 'react';
import Truncate from 'react-truncate-html';

class Comments extends Component {
  render(props) {
    const listItems = this.props.comments.map((comment) =>
      <div key={comment.id} className="mb-3">
        <strong>{comment.issue.title}</strong> <br />
        <Truncate lines={3} dangerouslySetInnerHTML={{__html: comment.bodyText}} /> <br />
        <i>{comment.issue.repository.nameWithOwner} #{comment.issue.number}</i>
      </div>
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default Comments;
