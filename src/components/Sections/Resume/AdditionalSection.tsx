import {FC, memo, PropsWithChildren} from 'react';


const AdditionalSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <section className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <header className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </header>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">
        <article className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left">
          {children}
          <div className="flex flex-col space-y-32">
            <br />
          </div>
        </article>
      </div>
    </section>
  );
});

AdditionalSection.displayName = 'ResumeSection';
export default AdditionalSection;
