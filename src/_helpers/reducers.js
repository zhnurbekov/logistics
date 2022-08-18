import sortReducers from '../common/utils/sortReducers';
import searchReducer, { searchModule } from '../common/Header/SearchDucks';

export default sortReducers({
  [searchModule]: searchReducer,
});
