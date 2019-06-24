import update from "immutability-helper";
import {
  GET_FILTER_COLORS,
  GET_FILTER_COLORS_SUCCESS,
  GET_FILTER_COLORS_FAILURE,
  GET_FILTER_MANUFACTURERS,
  GET_FILTER_MANUFACTURERS_SUCCESS,
  GET_FILTER_MANUFACTURERS_FAILURE,
  SET_FILTERS,
  SET_SORT_ORDER
} from '../../action-types';

export const initialState = {
  meta: {
    isLoading: true,
    selectedColor: '',
    selectedManufacturer: '',
    sortOrder: ''
  },
  colors: [],
  manufacturers: []
};

export default function reducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_FILTER_MANUFACTURERS:
    case GET_FILTER_COLORS:
      return update(state, {
        meta: {
          isLoading: {
            $set: true
          }
        }
      });

    case GET_FILTER_COLORS_SUCCESS: {
        const { colors } = payload;
        return update(state, {
          meta: {
            isLoading: {
              $set: false
            }
          },
          colors: { $set: colors }
        });
      }
    

    case SET_FILTERS: {
      const { color, manufacturer } = payload;
      return update(state, {
        meta: {
          selectedColor: { $set: color || state.meta.selectedColor },
          selectedManufacturer: { $set: manufacturer || state.meta.selectedManufacturer }
        }
      });
    }

    case SET_SORT_ORDER: {
      const { sortOrder } = payload;
      return update(state, {
        meta: {
          sortOrder: { $set: sortOrder }
        }
      });
    }

    case GET_FILTER_MANUFACTURERS_SUCCESS: {
      const { manufacturers } = payload;
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        },
        manufacturers: { $set: manufacturers }
      });
    }

    case GET_FILTER_MANUFACTURERS_FAILURE:
    case GET_FILTER_COLORS_FAILURE: {
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        }
      });
    }

    default:
      return state;
  }
}
