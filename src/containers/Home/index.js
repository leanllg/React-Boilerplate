/**
 * Created by LLGZONE on 2017/10/27.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, invalidateReddit } from '../../actions'
import Picker from '../../components/Home/Picker'
import Posts from '../../components/Home/Posts'

class App extends Component {
  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()
    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={(reddit)=>this.handleChange(reddit)}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {lastUpdated &&
          <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            {' '}
            </span>
          }
          {!isFetching &&
          <a href="#"
             onClick={(e)=>this.handleRefreshClick(e)}>
            Refresh
          </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
        <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
        <h2>Empty.</h2>
        }
        {posts.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Posts posts={posts} />
        </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state.reducers
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)