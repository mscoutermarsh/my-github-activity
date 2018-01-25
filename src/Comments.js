import React, { Component } from 'react';
import Truncate from 'react-truncate-html';
import {CommentIcon, IssueOpenedIcon, ChevronRightIcon} from 'react-octicons';

class Comments extends Component {
  render(props) {
    const listItems = this.props.comments.map((comment) =>
      <div key={comment.id} className="Box-row pl-4">
        <IssueOpenedIcon className="ml-n3 float-left mr-2"/>
        <a href={comment.issue.url}>
          <h3 className="mb-2 f5">{comment.issue.title}</h3>
        </a>
        <div className="pl-2 text-small mb-2 border-left">
          <Truncate lines={3} dangerouslySetInnerHTML={{__html: comment.bodyText}} />
        </div>
        <a href={comment.issue.url} className="d-block text-right text-gray">
          <h4 className="f6 text-normal">{comment.issue.repository.nameWithOwner} #{comment.issue.number} <ChevronRightIcon className="ml-2"/></h4>
        </a>
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
