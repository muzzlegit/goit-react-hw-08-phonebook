import styled from '@emotion/styled';
import theme from 'theme';

export const Section = styled.section({
  marginTop: '40px',
});
export const Container = styled.div({
  margin: '0 auto',
  padding: '0px 16px',
  width: '80%',
  textAlign: 'center',
});
export const GridContainer = styled.div({
  maxHeight: '80vh',
  display: 'grid',
  gridTemplateColumns: theme.gridTemplateColumns.layout,
  gridTemplateRows: theme.gridTemplateRows.layout,
  gridTemplateAreas: theme.gridTemplateAreas.layout,
  gridGap: '40px',
});
export const Title = styled.h1({
  marginBottom: '40px',
  fontSize: '52px',
  color: theme.colors.acent,
  textDecoration: 'underline',
});
export const GridCell = styled.div({}, props => ({
  maxHeight: '100%',
  gridArea: props.gridArea,
}));
