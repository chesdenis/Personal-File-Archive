using System;
using System.Collections.Generic;
using System.Text;

namespace PFS.Server.Core.ODataExtensions
{
    public static class ODataArgsExtensions
    {
        public static string ToStringNoQuotes(this string inputString)
        {
            var retVal = inputString;

            if (inputString.StartsWith("'") & inputString.EndsWith("'"))
            {
                retVal = retVal.TrimStart('\'');
                retVal = retVal.TrimEnd('\'');

            }

            return retVal;
        }

        //public static string Replace_2fToSlash(this string inputString)
        //{
        //    var retVal = inputString;
        //    if (retVal.Contains("_2f"))
        //    {
        //        retVal = retVal.Replace("_2f", "\\");
        //    }

        //    return retVal;
        //}
    }
}
