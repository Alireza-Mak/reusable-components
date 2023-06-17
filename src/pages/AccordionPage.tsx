import Accordion from '../components/Accordion/Accordion';
export interface AccordionItemsType {
  id: number;
  title: string;
  content: string;
}
export type AccordionType = AccordionItemsType[];

const accData: AccordionType = [
  {
    id: 12,
    title: 'Can I use React on a project?',
    content: 'You can use React on any project you want!',
  },
  {
    id: 3434,
    title: 'Can I use Typescript on a project?',
    content: 'You can use Typescript on any project you want!',
  },
  {
    id: 555,
    title: 'Can I use Javascript on a project?',
    content: 'You can use Javascript on any project you want!',
  },
  {
    id: 823,
    title: 'Can I use CSS on a project?',
    content: 'You can use CSS on any project you want!',
  },
];
const AccordionPage = () => {
  return (
    <>
      <Accordion accData={accData} />
    </>
  );
};

export default AccordionPage;
