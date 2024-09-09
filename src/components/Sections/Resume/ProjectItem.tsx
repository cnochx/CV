import {FC, memo} from 'react';

import {ProjectItem} from '../../../data/dataDef';

const ProjectItem: FC<{item: ProjectItem}> = memo(({item}) => {


  const {piKey, title,stack ,role, content} = item;
  return (
    <div className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left"
         key={piKey}>
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">Role: {role}</span>
          <span>&bull;</span>
          <span className="flex-1 text-sm sm:flex-none">Stack: {stack}</span>
        </div>
      </div>

      {content}

      <div className="flex flex-col space-y-32">
        <br />
      </div>
    </div>


  );
});

ProjectItem.displayName = 'ProjectItem';
export default ProjectItem;
