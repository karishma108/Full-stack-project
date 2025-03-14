package Members.EDIC.MembersEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import io.swagger.v3.oas.annotations.media.Schema;

@Entity
@Table(name = "committee_members") 
@Schema(name = "EDIC.members", description = "This is the model class for Committee Members, containing properties and getter-setter methods.")

public class Members {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long MemberId;
    
    private String name;
    private String role;
    private String contactInfo;
    private String email;
    private String dateOfJoining;
    private String committeeType;
    private String status;

    public Members() {}

    public Members(Long memberId, String name, String role, String contactInfo, String email, String dateOfJoining, String committeeType, String status) {
        this.MemberId = memberId;
        this.name = name;
        this.role = role;
        this.contactInfo = contactInfo;
        this.email = email;
        this.dateOfJoining = dateOfJoining;
        this.committeeType = committeeType;
        this.status = status;
    }

    // Getters and Setters
    public Long getMemberId() {
        return MemberId;
    }

    public void setMemberId(Long memberId) {
        this.MemberId = memberId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(String dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getCommitteeType() {
        return committeeType;
    }

    public void setCommitteeType(String committeeType) {
        this.committeeType = committeeType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


