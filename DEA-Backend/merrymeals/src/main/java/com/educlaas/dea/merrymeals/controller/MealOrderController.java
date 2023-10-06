package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealOrder;
import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.payload.MealOrderDto;
import com.educlaas.dea.merrymeals.payload.MealOrderResponse;
import com.educlaas.dea.merrymeals.repository.MealOrderRepository;
import com.educlaas.dea.merrymeals.repository.MemberRepository;

@RestController
@RequestMapping("/order")
public class MealOrderController {
   @Autowired
   private MealOrderRepository mealOrderRepository;

   @Autowired
   private MemberRepository memberRepository;

   @PostMapping("/save/")
   private MealOrderResponse saveMealOrder(@RequestBody MealOrderDto mealOrderDto) {
      Optional<Member> optionalMember = memberRepository.findById(mealOrderDto.getCurrentMember());
      if (optionalMember.isPresent()) {
         Optional<MealOrder> presentMealOrder = mealOrderRepository.findByMember(optionalMember.get());
         if (presentMealOrder.isPresent()) {
            return new MealOrderResponse(false, "You have a pending order");
         } else {
            Member member = optionalMember.get();

            MealOrder mealOrder = new MealOrder();
            mealOrder.setMember(member);
            mealOrder.setMondayMeal(mealOrderDto.getMondayMeal());
            mealOrder.setTuesdayMeal(mealOrderDto.getTuesdayMeal());
            mealOrder.setWednesdayMeal(mealOrderDto.getWednesdayMeal());
            mealOrder.setThursdayMeal(mealOrderDto.getThursdayMeal());
            mealOrder.setFridayMeal(mealOrderDto.getFridayMeal());
            mealOrderRepository.save(mealOrder);
            return new MealOrderResponse(true, "Meal Ordered Successfully!");
         }

      }
      return new MealOrderResponse(false, "Failed to Order");
   }

   @GetMapping("/all")
   public List<MealOrder> getMealOrders() {
      return mealOrderRepository.findAll();
   }

   @GetMapping("/member/{memberId}")
   private Optional<MealOrder> getMealOrder(@PathVariable long memberId) {
      Optional<Member> optionalMember = memberRepository.findById(memberId);
      if (optionalMember.isPresent()) {
         Member member = optionalMember.get();
         return mealOrderRepository.findByMember(member);
      }
      return null;
   }

   @GetMapping("/{orderId}")
   private Optional<MealOrder> getOrder(@PathVariable long orderId) {
      return mealOrderRepository.findById(orderId);
   }
   
   @DeleteMapping("/{mealOrderId}")
   private ResponseEntity<String> deleteOrder(@PathVariable long mealOrderId){
	   try {
		   Optional<MealOrder> optionalMealOrder = mealOrderRepository.findById(mealOrderId);
		   
		   if( optionalMealOrder.isPresent()) {
			   MealOrder mealOrder = optionalMealOrder.get();
			   
			   mealOrder.setMember(null);
			   mealOrderRepository.delete(mealOrder);
			   return ResponseEntity.ok("Meal Order deleted successfully");
		   }else {
			   return ResponseEntity.notFound().build();
		   }
	   }catch ( Exception e) {
		   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				   .body("Error deleting volunteer");
	   }
	   
   }
}
