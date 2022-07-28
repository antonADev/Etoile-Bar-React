import { PageHeaderContainer, PageHeaderText } from './page-header.styles';

const PageHeader = ({ title }) => {
  return (
    <PageHeaderContainer>
      <PageHeaderText>{title}</PageHeaderText>
    </PageHeaderContainer>
  );
};

export default PageHeader;
