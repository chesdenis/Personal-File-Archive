using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;

namespace PFS.Server.Core.Extensions
{
    public static class Serializers
    {
        public static T Deserialize<T>(this string jsonData)
        {
            T retVal;
            using (var ms = new MemoryStream(Encoding.UTF8.GetBytes(jsonData)))
            {
                var ser = new DataContractJsonSerializer(typeof(T));
                retVal = (T)ser.ReadObject(ms);
                ms.Close();
            }

            return retVal;
        }

        public static string Serialize<T>(this T dataToJson)
        {
            var serializer = new DataContractJsonSerializer(typeof(T));

            using (MemoryStream ms = new MemoryStream())
            {
                serializer.WriteObject(ms, dataToJson);
                return Encoding.UTF8.GetString(ms.ToArray());
            }
        }
    }
}
