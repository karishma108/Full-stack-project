package Members.EDIC.MembersController;



import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Members.EDIC.MembersEntity.Members;
import Members.EDIC.MembersRepository.MembersRepository;
import Members.EDIC.MembersResponseBean.MembersResponseBean;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Members API", description = "Operations related to committee members in EDIC")
public class MembersController {

    @Autowired
    private MembersRepository committeeMemberRepository;

    @Autowired
    private MembersResponseBean response;

    @Operation(summary = "Get all committee members")
    @GetMapping(path = "/EDIC/members", produces = "application/json")
    public ResponseEntity<Object> getAllMembers() {
        List<Members> membersList = committeeMemberRepository.findAll();
        response.setData(membersList);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Operation(summary = "Get a member by their ID")
    @GetMapping(path = "/EDIC/members/{MemberId}", produces = "application/json")
    public ResponseEntity<Object> getMemberById(@PathVariable("MemberId") Long memberId) {
        Optional<Members> member = committeeMemberRepository.findById(memberId);
        if (member.isPresent()) {
            response.setData(member.get());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.setErrorCode("404");
            response.setErrorDesc("Member not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Delete a member by their ID")
    @DeleteMapping(path = "/EDIC/members/{MemberId}")
    public ResponseEntity<Object> deleteMember(@PathVariable("MemberId") Long memberId) {
        Optional<Members> member = committeeMemberRepository.findById(memberId);
        if (member.isPresent()) {
            committeeMemberRepository.deleteById(memberId);
            response.setData("Member deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.setErrorCode("404");
            response.setErrorDesc("Member not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Add or update a committee member")
    @PostMapping(path = "/EDIC/members", produces = "application/json")
    public ResponseEntity<Object> addMember(@RequestBody Members committeeMember) {
        Members savedMember = committeeMemberRepository.save(committeeMember);
        response.setData(savedMember);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
