import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
//TOASTS
import { removeContactToast } from 'utils/toasts';
//SLICES
import { useDeleteContactMutation } from 'redux/contactsSlice';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import { Item, Button } from './ContactItem.styled';

export default function ContactItem({ contact, index }) {
  const { id, name, number: phone } = contact;
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) removeContactToast();
  }, [isSuccess]);

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
      >
        {isLoading ? (
          <Dna
            visible={true}
            height="36"
            width="36"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
          />
        ) : (
          <AiOutlineScissor size="24px" />
        )}
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
