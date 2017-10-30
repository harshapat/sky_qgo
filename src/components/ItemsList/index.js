import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, completeItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, deleteTodo, completeTodo }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => <li key={item.id} className='item-row'>
          <div><input className="toggle"
                 type="checkbox"
                 checked={item.completed}
                 onChange={() => completeTodo(item.id)} />
          </div>
          <div>{item.content}</div>
          <div>
            <input
              className={'itemCreator-button'}
              type="button"
              value={'Delete Task'}
              onClick={() => {deleteTodo(item.id)}}
            />
          </div>
        </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteItem(id)),
  completeTodo: id => dispatch(completeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
