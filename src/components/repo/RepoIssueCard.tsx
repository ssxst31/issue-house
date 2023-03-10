import { formatDistance, subDays } from "date-fns";
import ko from "date-fns/locale/ko";

import Avatar from "components/common/Avatar";

interface RepoIssueCardProps {
  issue: any;
}

function RepoIssueCard({ issue }: RepoIssueCardProps) {
  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noreferrer"
      className="justify-center inline-block w-full"
    >
      <span className="text-xl">{issue.title}</span>
      <div className="flex pb-2 border-b border-gray-200 border-solid">
        <Avatar src={issue.user.avatar_url} />
        <div className="flex items-center">
          <div className="mr-2 font-medium">{issue.user.login}</div>
          <div className="text-xs text-stone-300">
            <span className="mr-1">commented</span>
            <span>
              {issue.created_at &&
                formatDistance(
                  new Date(issue.created_at),
                  subDays(new Date(), 0),
                  {
                    addSuffix: true,
                    locale: ko,
                  }
                )}
            </span>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm font-light break-all whitespace-pre-wrap">
        {issue.body}
      </div>
    </a>
  );
}

export default RepoIssueCard;
