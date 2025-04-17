package Members.EDIC.MembersResponseBean;


import org.springframework.stereotype.Component;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@ToString
@Component
public class MembersResponseBean {
    private String errorCode;
    private String errorDesc;
    private Object data;
}


