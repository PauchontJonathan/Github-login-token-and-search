import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const Results = ({ repoResults }) => (
  <Card.Group>
    {repoResults.map((repo) => (
      <Card key={repo.id}>
        <Image src={repo.owner.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{repo.name}</Card.Header>
          <Card.Meta>{repo.owner.login}</Card.Meta>
          <Card.Description>
            {repo.description}
          </Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

Results.propTypes = {
  repoResults: PropTypes.array.isRequired,
};

export default Results;
