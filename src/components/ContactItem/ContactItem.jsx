import PropTypes from 'prop-types';
//SLICES
import { useDeleteContactMutation } from 'redux/contactsSlice';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import theme from 'theme';
import { Item, Button } from './ContactItem.styled';

export default function ContactItem({ contact, index }) {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item key={id} id={id}>
      <p>
        {index + 1}. {name} - {phone}
      </p>
      <Button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
        color={isLoading ? theme.colors.pGray : theme.colors.red}
      >
        <AiOutlineScissor size="24px" />
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
