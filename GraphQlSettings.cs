using GraphQL.Types;
using Microsoft.AspNetCore.Http;

namespace WebApplicationBasic
{
    public class GraphQLSettings
    {
        public PathString Path { get; set; } = "/graphql";
        public ISchema Schema { get; set; }
    }
}