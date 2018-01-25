import React, { Component } from 'react';
import Truncate from 'react-truncate-html';
import {CommentIcon, IssueOpenedIcon, ChevronRightIcon, GitPullRequestIcon} from 'react-octicons';

class Comments extends Component {
  render(props) {
    const listItems = this.props.comments.map((comment) =>

      <div key={comment.id} className="Box-row pl-4">
        <CommentTypeIcon comment={comment}/>
        <a href={comment.issue.url}>
          <h3 className="mb-2 f5">{comment.issue.title}</h3>
        </a>
        <div className="pl-2 text-small mb-2 quote">
          <Truncate lines={3} dangerouslySetInnerHTML={{__html: comment.bodyText}} />
        </div>
        <a href={comment.issue.url} className="d-block text-right text-gray">
          <h4 className="f6 text-normal">{comment.issue.repository.nameWithOwner} #{comment.issue.number} <ChevronRightIcon className="ml-1 text-blue octicon-chevron"/></h4>
        </a>
      </div>
    );

    return (
      <div class="d-flex flex-column-reverse">
        {listItems}
      </div>
    );
  }
}

function CommentTypeIcon(props) {
  const comment = props.comment;

  if(comment.pullRequest) {
    return(
      <GitPullRequestIcon className="ml-n4 float-left octicon-margin text-green"/>
    )
  } else {
    return (
      <IssueOpenedIcon className="ml-n4 float-left octicon-margin text-green"/>
    );
  }
}

export default Comments;
