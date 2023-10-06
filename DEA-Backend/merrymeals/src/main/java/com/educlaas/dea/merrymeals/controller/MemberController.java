package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.payload.MemberRegister;
import com.educlaas.dea.merrymeals.payload.UserMemberDto;
import com.educlaas.dea.merrymeals.repository.MemberRepository;
import com.educlaas.dea.merrymeals.repository.UsersRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/all")
    public List<Member> getMembers() {
        return memberRepository.findAll();
    }

    @GetMapping("/{memberId}")
    public Optional<Member> getMemberId(@PathVariable Long memberId) {
        return memberRepository.findById(memberId);
    }

    @DeleteMapping("/{memberId}")
    public ResponseEntity<String> deleteMember(@PathVariable Long memberId) {
        try {
            Optional<Member> optionalMember = memberRepository.findById(memberId);

            if (optionalMember.isPresent()) {
                Member member = optionalMember.get();
                Users user = member.getUser();

                member.setUser(null);
                memberRepository.delete(member);
                usersRepository.delete(user);
                return ResponseEntity.ok("Member deleted successfully");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting member");
        }
    }

    @PutMapping("/update/{memberId}")
    public ResponseEntity<String> updateMember(@PathVariable long memberId,@RequestBody Member memberUpdate) {
        try {
            Optional<Member> optionalMember = memberRepository.findById(memberId);
            if (optionalMember.isPresent()) {
                Member member = optionalMember.get();
                Users user = member.getUser();
                user.setEmail(memberUpdate.getUser().getEmail());
                user.setIsApproved(memberUpdate.getUser().getIsApproved());
                member.setUser(null);
                member.setFirstName(memberUpdate.getFirstName());
                member.setLastName(memberUpdate.getLastName());
                member.setContactNumber(memberUpdate.getContactNumber());
                member.setDob(memberUpdate.getDob());
                member.setCondition(memberUpdate.getCondition());
                member.setAllergies(memberUpdate.getAllergies());
                member.setCaregiverName(memberUpdate.getCaregiverName());
                member.setRelationship(memberUpdate.getRelationship());
                member.setCaregiverContact(memberUpdate.getCaregiverContact());
                member.setUser(user);
                usersRepository.save(user);
                memberRepository.save(member);
                return ResponseEntity.ok("Member successfully updated!");
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating member");
        }
    }
}
