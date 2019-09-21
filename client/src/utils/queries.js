import gql from 'graphql-tag';

<<<<<<< Updated upstream
=======

const userQuery = gql`
 query user($id: String!) {
    user(id: $id) {
        name
    }
`;


>>>>>>> Stashed changes
const coldMenQuery = gql`
{
    cold {
      mens {
        name
        weight
      }
    }
  }  
`;

const coldWomenQuery = gql`
{
    cold {
      womens {
        name
        weight
      }
    }
  }  
`;

const coldNeutralQuery = gql`
{
    cold {
      neutral {
        name
        weight
      }
    }
  }  
`;

const desertMenQuery = gql`
{
    desert {
      mens {
        name
        weight
      }
    }
  }  
`;

const desertWomenQuery = gql`
{
    desert {
      womens {
        name
        weight
      }
    }
  }  
`;

const desertNeutralQuery = gql`
{
    desert {
      neutral {
        name
        weight
      }
    }
  }  
`;

const tropicalMenQuery = gql`
{
    tropical {
      mens {
        name
        weight
      }
    }
  }  
`;

const tropicalWomenQuery = gql`
{
    tropical {
      womens {
        name
        weight
      }
    }
  }  
`;

const tropicalNeutralQuery = gql`
{
    tropical {
      neutral {
        name
        weight
      }
    }
  }  
`;

const warmMenQuery = gql`
{
    warm {
      mens {
        name
        weight
      }
    }
  }  
`;

const warmWomenQuery = gql`
{
    warm {
      womens {
        name
        weight
      }
    }
  }  
`;

const warmNeutralQuery = gql`
{
    warm {
      neutral {
        name
        weight
      }
    }
  }  
`;


const seasonalMenQuery = gql`
{
    seasonal {
      mens {
        name
        weight
      }
    }
  }  
`;

const seasonalWomenQuery = gql`
{
    seasonal {
      womens {
        name
        weight
      }
    }
  }  
`;

const seasonalNeutralQuery = gql`
{
    seasonal {
      neutral {
        name
        weight
      }
    }
  }  
`;
<<<<<<< Updated upstream
export { coldMenQuery, coldWomenQuery, coldNeutralQuery, desertMenQuery, desertWomenQuery, desertNeutralQuery, tropicalMenQuery, tropicalWomenQuery, tropicalNeutralQuery, warmMenQuery, warmWomenQuery, warmNeutralQuery, seasonalMenQuery, seasonalWomenQuery, seasonalNeutralQuery}
=======
export { coldMenQuery, coldWomenQuery, coldNeutralQuery, desertMenQuery, desertWomenQuery, desertNeutralQuery, tropicalMenQuery, tropicalWomenQuery, tropicalNeutralQuery, warmMenQuery, warmWomenQuery, warmNeutralQuery, seasonalMenQuery, seasonalWomenQuery, seasonalNeutralQuery, userQuery}

>>>>>>> Stashed changes
