import React, { Component } from 'react';
import Truncate from 'react-truncate-html';
import {CommentIcon, IssueOpenedIcon, ChevronRightIcon, GitPullRequestIcon} from 'react-octicons';
import classNames from 'classnames';

class Comments extends Component {
  render(props) {
    const listItems = this.props.comments.map((comment) =>

      <div key={comment.id} className="Box-row pl-4">
        <CommentTypeIcon comment={comment}/>
        <a href={comment.issue.url}>
          <h3 className="mb-2 f5">{comment.issue.title}</h3>
        </a>
        <div className="pl-2 text-small mb-2 border-left">
          <Truncate lines={3} dangerouslySetInnerHTML={{__html: comment.bodyText}} />
        </div>
        <a href={comment.issue.url} className="d-block text-right text-gray">
          <h4 className="f6 text-normal">{comment.issue.repository.nameWithOwner} #{comment.issue.number} <ChevronRightIcon className="ml-1 text-blue octicon-top-nudge"/></h4>
        </a>
      </div>
    );

    return (
      <div className="d-flex flex-column-reverse">
        {listItems}
      </div>
    );
  }
}

function CommentTypeIcon(props) {
  const comment = props.comment;

  if(comment.pullRequest) {
    const open = comment.pullRequest.state === "OPEN"
    const closed = comment.pullRequest.state === "CLOSED"
    const merged = comment.pullRequest.state === "MERGED"

    const classes = classNames('ml-n4', 'float-left', 'octicon-margin', { "text-green": open, "text-red": closed, "text-purple": merged });

    return(
      <GitPullRequestIcon className={classes}/>
    )
  } else {
    const open = comment.issue.state === "OPEN"
    const closed = comment.issue.state === "CLOSED"
    const merged = comment.issue.state === "MERGED"

    const classes = classNames('ml-n4', 'float-left', 'octicon-margin', { "text-green": open, "text-red": closed, "text-purple": merged });

    return (
      <IssueOpenedIcon className={classes}/>
    );
  }
}

export default Comments;
